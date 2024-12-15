This error occurs when you try to access a component's state or props before it has been mounted.  This often happens inside lifecycle methods like `constructor` or `componentWillMount` (or their React Hooks equivalents).  These methods run before the component's state or props are fully initialized.

Example:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.someProp); // Error: this.props.someProp is undefined
    this.state = { count: this.props.initialCount }; // Error: this.props.initialCount may be undefined
  }
  render() {
    return <Text>{this.state.count}</Text>;
  }
}
```