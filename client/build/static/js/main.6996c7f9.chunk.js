(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),s=n.n(l),c=(n(23),n(13)),r=n(14),i=n(15),u=n(16),m=n(17),h=n(2),d=n.n(h),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.getBlogPosts()},a.handleChanges=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(c.a)({},n,o)),console.log(a.state)},a.formSubmission=function(e){e.preventDefault();var t={title:a.state.title,body:a.state.body};d()({url:"/api/save",method:"POST",data:t}).then((function(){console.log("Data sent"),a.resetInputs(),a.getBlogPosts()})).catch((function(){return console.log("Internal Error")}))},a.getBlogPosts=function(){d.a.get("/api/get").then((function(e){var t=e.data;a.setState({posts:t}),console.log("Data received")})).catch((function(){console.log("Error")}))},a.resetInputs=function(){a.setState({title:"",body:""})},a.state={title:"",body:"",posts:[]},a}return Object(i.a)(n,[{key:"render",value:function(){return console.log(this.state),o.a.createElement("div",{className:"body"},o.a.createElement("h2",null,"Welcome to my App"),o.a.createElement("form",{onSubmit:this.formSubmission},o.a.createElement("div",{className:"form-input"},o.a.createElement("input",{type:"text",name:"title",placeholder:"Title",value:this.state.title,onChange:this.handleChanges})),o.a.createElement("div",{className:"form-input"},o.a.createElement("textarea",{value:this.state.body,placeholder:"Body",onChange:this.handleChanges,name:"body"})),o.a.createElement("button",{type:"submit"},"Submit")),o.a.createElement("div",null,this.state.posts.map((function(e){return o.a.createElement("div",{key:e._id,className:"posts"},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6996c7f9.chunk.js.map