import './styles.css';
import React, { useState } from 'react';

const languages = ['JavaScript', 'Python'];

const GloablContext = React.createContext(languages);

export function App(props) {
  const [language, setLanguage] = useState(languages[0]);

  const changingLanguagues = (language) => {
    switch (language) {
      case languages[0]:
        setLanguage(languages[1]);
        break;
      case languages[1]:
        setLanguage(languages[0]);
        break;
      default:
        break;
    }
  };

  return (
    // implement Context here so can be used in child components
    <GloablContext.Provider value={[language, changingLanguagues]}>
      <MainSection changingLanguagues={changingLanguagues} />
    </GloablContext.Provider>
  );
}

function MainSection() {
  return (
    <GloablContext.Consumer>
      {([language, changingLanguagues]) => (
        <div>
          <p id="favoriteLanguage">Favorite programing language: {language}</p>
          <button
            id="changeFavorite"
            onClick={(e) => changingLanguagues(language)}
          >
            Toggle language
          </button>
        </div>
      )}
    </GloablContext.Consumer>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
