(() => {
  const trackingNumberRegex = new RegExp('(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\dT]\d\d\d ?\d\d\d\d ?\d\d\d)');
  const selector = 'a[alt="Tracking Number"]';
  const trackingUrlTemplate = 'https://www.ups.com/track?tracknum=';
  const myChoiceLinkContent = "upsmychoice";

  const openLinks = () => Array.from(document.querySelectorAll(selector))
      .filter(node => node.href.includes(myChoiceLinkContent) && trackingNumberRegex.test(node.text))
      .forEach(node => window.open(trackingUrlTemplate + node.text, '_blank'));

  openLinks();
})();
