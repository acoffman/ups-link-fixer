const contextMenuId = 'openUpsLinks';
browser.contextMenus.create({
  id: contextMenuId,
  title: 'Open UPS Tracking Links'
});

browser.contextMenus.onClicked.addListener((info, _) => {
  if(info.menuItemId == contextMenuId) {
    browser.tabs.executeScript({ file: '/fix-links.js' });
  }
});
