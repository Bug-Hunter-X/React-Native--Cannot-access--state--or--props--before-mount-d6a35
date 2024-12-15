# React Native: Cannot access 'state' or 'props' before mount

This repository demonstrates a common React Native error where you attempt to access component state or props before the component has mounted.  The issue arises when accessing `this.props` or `this.state` within lifecycle methods such as `constructor` or `componentWillMount` (or their React Hooks counterparts) before the component's initialization is complete.

## Problem

Accessing `this.props` or `this.state` prematurely leads to `undefined` values, resulting in errors or unexpected behavior.  The code examples show this issue and a solution using lifecycle methods or React Hooks.

## Solution

The solution involves accessing these values only after the component has mounted, using lifecycle methods like `componentDidMount` or React Hooks like `useEffect`.  This ensures that the component's state and props are fully initialized before being accessed.