class WindowHistory {
  navigate(url) {
    window.history.pushState({}, "", url);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  currentPathname() {
    return window.location.pathname;
  }

  subscribe(callback) {
    return window.addEventListener('popstate', callback);
  }

  unsubscribe(callback) {
    return window.removeEventListener('popstate', callback);
  }
}

export default WindowHistory;