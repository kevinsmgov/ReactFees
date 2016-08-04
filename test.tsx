// References to our typings file to get intellisense

/// <reference path="DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="DefinitelyTyped/react/react-global.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler,
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

// tutorial8.js
var data = [
    { id: 1, author: "Pete Hunt", text: "This is one comment" },
    { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
    { id: 3, author: "Test User", text: "This is still *another* comment" }
];

interface CommentItem {
    author: string
}

interface CommentList {
    data: any
}

interface CommentBox {
    data: any
}

// tutorial4.js
var CommentItem = React.createClass<CommentItem, any>({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

// tutorial10.js
var CommentList = React.createClass<CommentList, any>({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <CommentItem author={comment.author}>
                    {comment.text}
                </CommentItem>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world!I am a CommentForm.
            </div>
        );
    }
});

// tutorial3.js
var CommentBox = React.createClass<CommentBox, any>({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);