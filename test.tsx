// References to our typings file to get intellisense

/// <reference path="DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="DefinitelyTyped/react/react-global.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler,
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


interface MyProps {
    name: string;
}

class HelloWorld extends React.Component<MyProps, {}> {
    constructor(props: MyProps) {
        super(props);
    }
    render() {
        return (<div> Hello {this.props.name} </div>);
    }
}

ReactDOM.render(<HelloWorld name="World" />, document.getElementById('content'));