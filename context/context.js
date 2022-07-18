import React, { useContext, useMemo, useReducer } from 'react';

const ArticlesContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'setArticles':
      return {
        ...state,
        articles: action.value,
      };
    case 'setPage':
      return {
        ...state,
        page: action.value,
    };
    default:
      throw new Error(`Unexpected action ${action.type}`);
  }
}

const ArticlesContextProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    articles: [],
    page: 1
  });

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
};

const useArticlesContext = function () {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticlesContext must be used within a ArticlesContextProvider');
  }
  return context;
};

export {
    ArticlesContextProvider,
    useArticlesContext,
};