## dropdown-lib-higex

A library of React components created using `create-react-app`.

## Installation

Run the following command: `npm install dropdown-lib-higex`

## Usage

| Prop name     | Type           | Description                                                                       |
| ------------- | -------------- | --------------------------------------------------------------------------------- |
| options       | **_array_**    | List of options to choose in the dropdown menu, needs a name and a key per option |
| defaultOption | **_string_**   | Default message displayed before the option selection                             |
| onChange      | **_function_** | Get the value of the clicked option from the dropdown                             |

#### Array format

```javascript
const options = [
  { name: "Sales", key: "sal" },
  { name: "Marketing", key: "mar" },
  { name: "Engineering", key: "eng" },
  { name: "Human Ressources", key: "hr" },
  { name: "Legal", key: "leg" },
];
```

#### Calling the components

```javascript
<Dropdown
  options={options}
  defaultOption="Select Department"
  onChange={onChange}
></Dropdown>
```
