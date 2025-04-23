import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import styles from './DocumentList.module.css';

/**
 * 文档导航组件 - 支持多层嵌套目录结构，保持倒序，支持收起展开
 */
export default function DocumentList() {
  const allDocsData = useAllDocsData();
  const [docItems, setDocItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 存储目录的展开/收起状态，默认展开
  const [expandedState, setExpandedState] = useState({});

  // 存储文档id到标题的映射
  const [docTitles, setDocTitles] = useState({});
  
  // 切换目录的展开/收起状态
  const toggleExpand = (categoryId) => {
    setExpandedState(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId]
    }));
  };

  // 检查目录是否展开
  const isCategoryExpanded = (categoryId) => {
    // 如果目录ID不在状态中，默认为展开
    return expandedState[categoryId] !== false;
  };

  // 检查是否为欢迎页面
  const isWelcomePage = (id) => {
    return id === '0-Welcome' || 
           id.toLowerCase().includes('welcome') || 
           id.toLowerCase().includes('欢迎');
  };

  // 提取可读的文件名
  const getDisplayName = (item) => {
    // 优先使用预设的标题映射
    if (item.id && docTitles[item.id]) {
      return docTitles[item.id];
    }
    
    // 如果有显式设置的title，使用它
    if (item.title) {
      return item.title;
    }
    
    // 如果没有预设标题，使用ID的最后部分
    if (item.id) {
      const lastPart = item.id.split('/').pop();
      return lastPart.replace(/-/g, ' ');
    }
    
    // 最后的后备选项
    return '无标题文档';
  };

  useEffect(() => {
    try {
      const processedItems = [];
      const titleMap = {};
      
      // 处理所有文档插件数据
      Object.keys(allDocsData).forEach(pluginId => {
        const docsData = allDocsData[pluginId];
        const { versions } = docsData;
        const latestVersion = versions.find(version => version.isLast);
        
        if (latestVersion && latestVersion.docs) {
          // 获取倒序的文档列表
          const reversedDocs = [...latestVersion.docs].reverse();
          
          // 调试：输出第一个文档对象，查看属性
          if (reversedDocs.length > 0) {
            console.log('文档对象示例:', reversedDocs[0]);
            console.log('文档对象属性:', Object.keys(reversedDocs[0]));
          }
          
          // 保存所有文档ID到标题的映射
          reversedDocs.forEach(doc => {
            // 从id中提取标题
            const lastPart = doc.id.split('/').pop();
            
            // 移除数字前缀并格式化
            if (lastPart.match(/^\d+-/)) {
              const formatted = lastPart.replace(/^\d+-/, '').replace(/-/g, ' ');
              titleMap[doc.id] = formatted.charAt(0).toUpperCase() + formatted.slice(1);
            } else {
              titleMap[doc.id] = lastPart.replace(/-/g, ' ');
            }
          });
          
          // 构建文档路径树
          const categoryMap = new Map();
          
          // 处理所有文档，构建目录结构
          reversedDocs.forEach(doc => {
            if (isWelcomePage(doc.id)) {
              return; // 跳过欢迎页
            }
            
            // 分割路径，最后一部分是文档，前面的是目录
            const pathParts = doc.id.split('/');
            
            // 如果只有一级，直接作为根级文档
            if (pathParts.length === 1) {
              // 创建文档对象，收集尽可能多的元数据
              const docObj = {
                type: 'document',
                id: doc.id,
                title: doc.title,
                path: doc.path
              };
              
              processedItems.push(docObj);
              return;
            }
            
            // 处理多级结构
            let currentPath = '';
            for (let i = 0; i < pathParts.length - 1; i++) {
              const part = pathParts[i];
              const prevPath = currentPath;
              currentPath = prevPath ? `${prevPath}/${part}` : part;
              
              // 如果此目录不存在，则创建
              if (!categoryMap.has(currentPath)) {
                // 提取可读的目录名称
                let displayName = part;
                if (part.match(/^\d+-/)) {
                  // 如有数字前缀，进行格式化处理
                  const readableName = part.replace(/^\d+-/, '').replace(/-/g, ' ');
                  displayName = readableName.charAt(0).toUpperCase() + readableName.slice(1);
                }
                
                const category = {
                  type: 'category',
                  id: currentPath,
                  label: displayName, // 使用处理后的显示名称
                  items: [],
                  parent: prevPath
                };
                categoryMap.set(currentPath, category);
                
                // 如果有父级，添加到父级的items中
                if (prevPath) {
                  const parentCategory = categoryMap.get(prevPath);
                  if (parentCategory) {
                    parentCategory.items.push(category);
                  }
                } else {
                  // 一级目录，添加到根级别
                  processedItems.push(category);
                }
              }
            }
            
            // 添加文档到最后一级目录
            const docCategory = categoryMap.get(pathParts.slice(0, -1).join('/'));
            if (docCategory) {
              // 创建文档对象，收集尽可能多的元数据
              const docObj = {
                type: 'document',
                id: doc.id,
                title: doc.title,
                path: doc.path
              };
              
              docCategory.items.push(docObj);
            }
          });
        }
      });
      
      setDocItems(processedItems);
      setDocTitles(titleMap);
    } catch (error) {
      console.error('处理文档结构时出错:', error);
    } finally {
      setLoading(false);
    }
  }, [allDocsData]);
  
  // 渲染文档项目
  const renderDocItem = (item) => {
    if (item.type === 'document') {
      const displayName = getDisplayName(item);
      return (
        <Link key={item.id} to={item.path} className={styles.level2FileLink}>
          <span className={styles.fileName}>{displayName}</span>
        </Link>
      );
    }
    return null;
  };
  
  // 渲染文档链接列表
  const renderDocLinks = (items) => {
    const docLinks = items
      .filter(item => item.type === 'document')
      .map(renderDocItem);
      
    if (docLinks.length === 0) return null;
    
    return (
      <div className={styles.level2Files}>
        {docLinks}
      </div>
    );
  };
  
  // 递归渲染目录树
  const renderCategory = (category, level = 0) => {
    if (!category || !category.items || category.items.length === 0) {
      return null;
    }
    
    // 确保目录标题有值，优先使用label
    const displayLabel = category.label || getDisplayName(category) || '未命名目录';
    
    // 获取当前目录的展开状态
    const isExpanded = isCategoryExpanded(category.id);
    
    // 将文档和目录分离
    const docs = category.items.filter(item => item.type === 'document');
    const categories = category.items.filter(item => item.type === 'category');
    
    const docLinks = docs.map(renderDocItem);
    
    return (
      <div key={category.id} className={styles.folderBlock}>
        <div className={styles.folderHeader} onClick={() => toggleExpand(category.id)}>
          <span className={`${styles.expandIcon} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            {isExpanded ? '▼' : '▶'}
          </span>
          <span className={styles.folderTitle}>{displayLabel}</span>
        </div>
        
        {isExpanded && (
          <div className={styles.folderContent}>
            {/* 先显示文档 */}
            {docLinks.length > 0 && (
              <div className={styles.treeFiles}>
                {docLinks}
              </div>
            )}
            
            {/* 再显示子目录 */}
            {categories.length > 0 && (
              <div className={level > 0 ? styles.treeList : styles.docBlocks}>
                {categories.map(cat => renderCategory(cat, level + 1))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  // 渲染整个文档树
  const renderDocTree = () => {
    // 将根级文档和目录分离
    const rootDocs = docItems.filter(item => item.type === 'document');
    const rootCategories = docItems.filter(item => item.type === 'category');
    
    return (
      <div className={styles.docTreeContainer}>
        {/* 先显示根级文档 */}
        {renderDocLinks(rootDocs)}
        
        {/* 再显示根级目录 */}
        <div className={styles.docBlocks}>
          {rootCategories.map(category => renderCategory(category))}
        </div>
      </div>
    );
  };
  
  if (loading) {
    return (
      <div className={styles.documentListContainer}>
        <div className={styles.emptyState}>
          <p>正在加载文档数据...</p>
        </div>
      </div>
    );
  }
  
  // 如果没有文档数据
  if (docItems.length === 0) {
    return (
      <div className={styles.documentListContainer}>
        <div className={styles.emptyState}>
          <p>暂无文档数据。请确保已经添加了文档内容到docs目录。</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.documentListContainer}>
      {renderDocTree()}
    </div>
  );
} 