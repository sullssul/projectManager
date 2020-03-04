import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";
import Group from "../group/group";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { groups: [] }
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getCategory(this.props.categoryId).then(res => {
      this.setState({
        category: res
      });
    });
  }
  //Создание массива карточек групп
  renderItems() {
    let i = 0;
    console.log(this.state.category.groups);
    return this.state.category.groups.map(el => {
      if (el.id === "main") {
        return "";
      }
      return (
        <Card
          key={i++}
          id={el.id}
          title={el.title}
          description={el.description}
        />
      );
    });
  }

  render() {
    const items = this.renderItems();
    const { category } = this.state;
    return (
      <div>
        <Header
          text={category.title}
          icon="shapes"
          description={category.description}
        />
        <div className="flex-wrapper">{items}</div>
        <Header text="Задачи основной группы" icon="albums" size="middle" />
        <Group type="without_header" />
      </div>
    );
  }
}
