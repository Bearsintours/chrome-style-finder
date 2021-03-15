let font = "test font";
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ font });
  console.log(font);
});
