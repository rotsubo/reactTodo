import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import * as Style from './AppStyle.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ToDoList : "",
      ListArray:[],
      ListValue:'ToDo',
    }
    this.SetList = this.SetList.bind(this);
    this.PushArray = this.PushArray.bind(this);
    this.ListActive = this.ListActive.bind(this);
  };

  //stateを更新
SetList(event){
  this.setState({
    ToDoList : event.target.value
  })
};
PushArray(){
  this.state.ListArray.push({todo:this.state.ToDoList,done:0})
}
ListActive(event){
  this.setState({
  ListValue : event.target.textContent
  })
}
  render(){
        let TabChangeStyleTodo;
        let TabChangeStyleDone;
    {(()=> {
          if(this.state.ListValue =="ToDo"){
            TabChangeStyleTodo = Style.tabChangeStyle
            TabChangeStyleDone ;
          }else if(this.state.ListValue =="Done"){
            TabChangeStyleTodo ;
            TabChangeStyleDone = Style.tabChangeStyle
          }
                           })()}
    return(
  <div>
    <header style={Style.titlestyle}>
    <h1>Todo</h1>
    </header>
      <p>値：{this.state.ToDoList}</p>
      <div>
      <Card style={Style.cardStyle}>
        <Input defaultValue="" placeholder="入力" name="inputList" ref="Input" onChange={this.SetList} style={Style.inputStyle} />
      </Card>
        <Button color="primary" variant="raised" onClick={this.PushArray}>Add
        </Button>
      </div>
      <Tabs className="Tab" style={Style.TabStyles}>
       <Tab className="TabContents" value="todo" label="ToDo" onClick={this.ListActive} style={TabChangeStyleTodo} />
       <Tab className="TabContents" value="done" label="Done" onClick={this.ListActive} style={TabChangeStyleDone} />
      </Tabs>
      {(() => {
      if(this.state.ListValue == 'ToDo'){
      return <ContentsTodo />
      }else if(this.state.ListValue == 'Done'){
        return <ContentsDone />
      }
        })()}
//for文でまわして表示する
  </div>
)
}
};

class ContentsTodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isTodo:'ture',
      ListArray:this.props.ListArray
    }
  };
  render(){
    return(
    <div>
      <p>todo</p>
    </div>
    )
  }
};

class ContentsDone extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
    <div>
      <p>DONE!!!!!!!!!!!!!!!!</p>
    </div>
    )
  }
};


//=====================================
ReactDOM.render(
  <App />,
    document.getElementById('root')
);
