// References to our typings file to get intellisense
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="DefinitelyTyped/react/react-global.d.ts" />
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        _super.call(this, props);
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, " Hello ", this.props.name, " "));
    };
    return HelloWorld;
}(React.Component));
ReactDOM.render(React.createElement(HelloWorld, {name: "World"}), document.getElementById('content'));
//# sourceMappingURL=test.js.map