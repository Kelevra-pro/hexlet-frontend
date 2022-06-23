const getAgentInfo = (href) => {
  window.location.href = href;
  return `${window.navigator.appCodeName} ${window.navigator.appVersion} ${window.location.href}`;
};

export default getAgentInfo;
