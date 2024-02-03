# lib-select-oc-p14

lib-select-oc-p14 est une bibliothèque de composants React permettant de créer facilement des éléments de sélection (select) personnalisés dans vos applications web.

## Installation

Vous pouvez installer lib-select-oc-p14 via npm en exécutant la commande suivante :

`npm install lib-select-oc-p14` ,

## Utilisation

Pour utiliser le composant Select dans votre application React, importez-le et intégrez-le à votre code comme suit :

```javascript

`import React, { useState } from 'react';
import { Select } from 'lib-select-oc-p14';

function Select() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Exemple d'utilisation du composant Select</h1>
      <Select
        id="example-select"
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Sélectionnez une option"
        options={options}
        name="example-select"
      />
    </div>
  );
}

export default Select;` 
```

## Props

Le composant Select accepte les props suivantes :

- `id`: Identifiant unique du composant.
- `value`: Valeur sélectionnée du composant.
- `onChange`: Fonction de rappel appelée lorsqu'une nouvelle valeur est sélectionnée.
- `placeholder`: Texte de l'option de placeholder.
- `options`: Tableau des options disponibles pour la sélection.
- `name`: Nom du composant.

## Exemple

Consultez notre storybook pour voir des exemples d'utilisation et d'interactions avec le composant Select.

## Contributeurs

Chaira M

## Licence

Ce projet est sous licence MIT.
