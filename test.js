"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this, props);
    }
    HelloWorld.prototype.render = function () {
        return (<div> Hello {this.props.name} </div>);
    };
    return HelloWorld;
}(React.Component));
ReactDOM.render(<HelloWorld name="World"/>, document.getElementById('content'));
