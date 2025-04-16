import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import styles from './DocumentList.module.css';

/**
 * 文档导航组件 - 使用混合结构呈现文档
 */
export default function DocumentList() {
  const allDocsData = useAllDocsData();
  const [docTree, setDocTree] = useState({});
  const [highlightDocs, setHighlightDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 需要特殊处理的高优先级文档
  const specialDocs = [
    'overview', 
    'introduction',
    'getting-started', 
    'quick-start',
    'quickstart',
    '快速入门',
    '概述',
    '介绍'
    // 'welcome', // 移除welcome从特殊文档中
    // '欢迎'
  ];
  
  // 检查文档是否属于特殊类型
  const isSpecialDoc = (key, title) => {
    if (!key && !title) return false;
    
    const normalizedKey = (key || '').toLowerCase();
    const normalizedTitle = (title || '').toLowerCase();
    
    return specialDocs.some(docType => 
      normalizedKey.includes(docType) || normalizedTitle.includes(docType)
    );
  };
  
  // 检查是否为Welcome文档
  const isWelcomeDoc = (key, title) => {
    if (!key && !title) return false;
    
    const normalizedKey = (key || '').toLowerCase();
    const normalizedTitle = (title || '').toLowerCase();
    
    return normalizedKey.includes('welcome') || 
           normalizedKey.includes('欢迎') || 
           normalizedTitle.includes('welcome') || 
           normalizedTitle.includes('欢迎');
  };
  
  // 文档排序
  const sortDocItems = (items) => {
    return Object.entries(items).sort((a, b) => {
      const [keyA, itemA] = a;
      const [keyB, itemB] = b;
      
      // 优先级文档排在前面
      const isSpecialA = isSpecialDoc(keyA, itemA.title);
      const isSpecialB = isSpecialDoc(keyB, itemB.title);
      
      if (isSpecialA && !isSpecialB) return -1;
      if (!isSpecialA && isSpecialB) return 1;
      
      // 目录排在前面
      const hasChildrenA = Object.keys(itemA.items || {}).length > 0;
      const hasChildrenB = Object.keys(itemB.items || {}).length > 0;
      
      if (hasChildrenA && !hasChildrenB) return -1;
      if (!hasChildrenA && hasChildrenB) return 1;
      
      // 按标题字母顺序排序
      return (itemA.title || keyA).localeCompare(itemB.title || keyB);
    });
  };
  
  useEffect(() => {
    // 处理文档数据，构建文档树
    const tree = {};
    const highlights = [];
    
    try {
      // 遍历所有文档插件数据
      Object.keys(allDocsData).forEach(pluginId => {
        const docsData = allDocsData[pluginId];
        const { versions } = docsData;
        const latestVersion = versions.find((version) => version.isLast);
        
        if (latestVersion && latestVersion.docs) {
          // 调试输出一些原始文档数据
          console.log('原始文档数据示例:', latestVersion.docs.slice(0, 3));
          
          // 处理所有文档
          latestVersion.docs.forEach(doc => {
            // 跳过欢迎页面
            if (doc.id === '0-Welcome' || isWelcomeDoc(doc.id, doc.title)) {
              console.log('过滤欢迎文档:', doc.id, doc.title);
              return; // 直接跳过，不添加到任何地方
            }
            
            // 检查这个文档是否需要突出显示
            const isHighlight = isSpecialDoc(doc.id, doc.title);
            
            // 如果是单层结构的特殊文档，放到highlight数组
            if (isHighlight && !doc.id.includes('/')) {
              highlights.push({
                id: doc.id,
                title: doc.title,
                path: doc.path
              });
              // 同时也添加到树结构中，方便完整性
            }
            
            // 解析文档路径，提取层级结构
            const pathParts = doc.id.split('/');
            
            // 递归添加到树结构
            let currentLevel = tree;
            for (let i = 0; i < pathParts.length; i++) {
              const part = pathParts[i];
              const isLastPart = i === pathParts.length - 1;
              
              if (!currentLevel[part]) {
                // 创建新项目
                currentLevel[part] = {
                  id: part,
                  title: isLastPart ? doc.title || part : part, // 防止title为undefined
                  path: isLastPart ? doc.path : null,
                  items: {}
                };
              } else if (isLastPart) {
                // 更新现有项的路径和标题
                currentLevel[part].title = doc.title || part; // 防止title为undefined
                currentLevel[part].path = doc.path;
              }
              
              // 移动到下一级
              if (!currentLevel[part].items) {
                currentLevel[part].items = {}; // 确保items存在
              }
              currentLevel = currentLevel[part].items;
            }
          });
        }
      });
      
      // 检查并修复可能的空title
      const fixMissingTitles = (items) => {
        Object.keys(items).forEach(key => {
          const item = items[key];
          
          // 如果没有标题，使用ID作为标题
          if (!item.title) {
            item.title = item.id || key;
            console.log('修复缺失标题:', key, '→', item.title);
          }
          
          // 递归处理子项
          if (item.items && Object.keys(item.items).length > 0) {
            fixMissingTitles(item.items);
          }
        });
      };
      
      fixMissingTitles(tree);
      
      // 按优先级排序突出显示的文档
      highlights.sort((a, b) => a.title.localeCompare(b.title));
      
      // 调试输出构建后的树结构
      console.log('构建的文档树结构:', JSON.stringify(tree, null, 2).substring(0, 500) + '...');
      
      setDocTree(tree);
      setHighlightDocs(highlights);
    } catch (error) {
      console.error('处理文档结构时出错:', error);
    } finally {
      setLoading(false);
    }
  }, [allDocsData]);
  
  // 渲染顶部突出显示的文档链接
  const renderHighlightDocs = () => {
    // 过滤掉Welcome文档
    const filteredHighlightDocs = highlightDocs.filter(doc => !isWelcomeDoc(doc.id, doc.title));
    
    if (filteredHighlightDocs.length === 0) {
      return null;
    }
    
    return (
      <div className={styles.highlightDocsContainer}>
        {filteredHighlightDocs.map(doc => (
          <Link key={doc.id} to={doc.path} className={styles.highlightDocLink}>
            <span className={styles.fileName}>{doc.title}</span>
          </Link>
        ))}
      </div>
    );
  };

  // 将文档分为文件夹和文件两类
  const partitionItems = (items) => {
    const folders = {};
    const files = [];
    
    Object.entries(items).forEach(([key, item]) => {
      // 过滤掉Welcome文档
      if (isWelcomeDoc(key, item.title)) {
        return;
      }
      
      const hasChildren = Object.keys(item.items || {}).length > 0;
      
      if (hasChildren) {
        folders[key] = item;
      } else {
        files.push([key, item]);
      }
    });
    
    return { folders, files };
  };
  
  // 渲染第二级零散文件（单独占一行）
  const renderLevel2Files = (files) => {
    // 过滤掉Welcome文件
    const filteredFiles = files.filter(([key, file]) => !isWelcomeDoc(key, file.title));
    
    if (filteredFiles.length === 0) return null;
    
    // 调试输出
    console.log('Level2Files:', filteredFiles.map(([key, file]) => ({
      key,
      title: file.title,
      path: file.path,
      fileObj: file
    })));
    
    return (
      <div className={styles.level2Files}>
        {filteredFiles.map(([key, file]) => (
          <Link key={key} to={file.path} className={styles.level2FileLink}>
            <span className={styles.fileName}>{file.title || '无标题文档'}</span>
          </Link>
        ))}
      </div>
    );
  };
  
  // 递归渲染树形结构（第三级及以上）
  const renderTreeStructure = (items) => {
    if (!items || Object.keys(items).length === 0) {
      return null;
    }
    
    // 将文档分为文件夹和文件
    const { folders, files } = partitionItems(items);
    
    // 排序文件夹
    const sortedFolders = sortDocItems(folders);
    
    // 先排序文件并过滤Welcome文件
    const sortedFiles = files
      .filter(([key, file]) => !isWelcomeDoc(key, file.title))
      .sort((a, b) => {
        const [, fileA] = a;
        const [, fileB] = b;
        return (fileA.title || '').localeCompare(fileB.title || '');
      });
    
    // 调试输出
    if (sortedFiles.length > 0) {
      console.log('TreeFiles:', sortedFiles.map(([key, file]) => ({
        key,
        title: file.title,
        path: file.path,
        fileObj: file
      })));
    }
    
    return (
      <ul className={styles.treeList}>
        {/* 先渲染文件 */}
        {sortedFiles.length > 0 && (
          <div className={styles.treeFiles}>
            {sortedFiles.map(([key, file]) => (
              <li key={key} className={styles.treeFileItem}>
                <Link to={file.path} className={styles.treeFileLink}>
                  <span className={styles.fileName}>
                    {file.title || key || '无标题文档'}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        )}
        
        {/* 然后渲染文件夹 */}
        {sortedFolders.map(([key, folder]) => (
          <li key={key} className={styles.treeFolderItem}>
            <div className={styles.treeFolderTitle}>
              {folder.path ? (
                <Link to={folder.path} className={styles.treeFolderLink}>
                  <span className={styles.folderTitle}>{folder.title || key}</span>
                </Link>
              ) : (
                <span className={styles.folderTitle}>{folder.title || key}</span>
              )}
            </div>
            {renderTreeStructure(folder.items)}
          </li>
        ))}
      </ul>
    );
  };
  
  // 递归渲染文档树（第一级和第二级）
  const renderDocTree = (items, level = 0) => {
    if (!items || Object.keys(items).length === 0) {
      return null;
    }
    
    // 将文档分为文件夹和文件
    const { folders, files } = partitionItems(items);
    
    // 对文件夹排序
    const sortedFolders = sortDocItems(folders);
    
    // 对文件排序并过滤Welcome文件
    const sortedFiles = files
      .filter(([key, file]) => !isWelcomeDoc(key, file.title))
      .sort((a, b) => {
        const [, fileA] = a;
        const [, fileB] = b;
        return (fileA.title || '').localeCompare(fileB.title || '');
      });
    
    // 调试输出第一级和第二级文件
    console.log(`Level ${level} Files:`, sortedFiles.map(([key, file]) => ({
      key,
      title: file.title,
      path: file.path
    })));
    
    // 在第一级使用单列，第二级使用多列
    const blocksClassName = level === 1 ? `${styles.docBlocks} ${styles.multiColumn}` : styles.docBlocks;
    
    return (
      <div className={blocksClassName}>
        {/* 在第二级，零散文件单独占满一行 */}
        {level === 1 && sortedFiles.length > 0 && (
          <div className={styles.level2Files}>
            {sortedFiles.map(([key, file]) => (
              <Link key={key} to={file.path} className={styles.level2FileLink}>
                <span className={styles.fileName}>{file.title || key || '无标题文档'}</span>
              </Link>
            ))}
          </div>
        )}
        
        {/* 第一级的零散文件显示在文件夹前面 */}
        {level === 0 && sortedFiles.length > 0 && (
          <div className={styles.level2Files}>
            {sortedFiles.map(([key, file]) => (
              <Link key={key} to={file.path} className={styles.level2FileLink}>
                <span className={styles.fileName}>{file.title || key || '无标题文档'}</span>
              </Link>
            ))}
          </div>
        )}
        
        {/* 渲染文件夹 */}
        {sortedFolders.map(([key, folder]) => (
          <div key={key} className={styles.folderBlock}>
            <div className={styles.folderHeader}>
              <span className={styles.folderTitle}>
                {folder.path ? (
                  <Link to={folder.path} className={styles.folderLink}>
                    {folder.title || key}
                  </Link>
                ) : (
                  folder.title || key
                )}
              </span>
            </div>
            
            <div className={styles.folderContent}>
              {/* 第三级开始使用树状结构 */}
              {level === 1 ? renderTreeStructure(folder.items) : renderDocTree(folder.items, level + 1)}
            </div>
          </div>
        ))}
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
  if (Object.keys(docTree).length === 0 && highlightDocs.length === 0) {
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
      {/* 突出显示的文档直接在顶部展示 */}
      {renderHighlightDocs()}
      
      {/* 混合结构呈现所有文档 */}
      <div className={styles.docTreeContainer}>
        {renderDocTree(docTree)}
      </div>
    </div>
  );
} 