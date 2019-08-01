/* eslint-disable no-loop-func */
import React from "react";
import dateFns from "date-fns";
import axios from "axios";
import { Link } from "react-router-dom";
//import { Modal } from "antd";

const baseURL = "https://service-calendar2.herokuapp.com";
//const baseURL = "http://localhost:3000";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    posts: [],
    currentDay: "",
    cMonth: "",
    currentYear: ""
  };

  componentWillMount() {
    axios
      .get(`${baseURL}/posts`)
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          posts: data.posts
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkDate = (post, day, month, year) => {
    let [mm, dd, yy] = post.date.split(" ");
    if (dd === day && mm === month && yy === year) {
      return true;
    }
    return false;
  };
  changeDay = day => {
    this.setState({
      currentDay: day
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const currentYear = dateFns.getYear(currentMonth).toString();

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let cMonth = dateFns.getMonth(currentMonth).toString();

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>

            <div className="post-list">
              <ul>
                {this.state.posts.map((post, i) => {
                  return this.checkDate(
                    post,
                    formattedDate,
                    cMonth,
                    currentYear
                  ) ? (
                    <Link key={i} to={`/posts/${post._id}`}>
                      <li>{post.title}</li>
                    </Link>
                  ) : null;
                })}
              </ul>
            </div>
          </div>
        );

        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows} </div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
    this.props.history.push(`/posts/${day}`);
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <main>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </main>
    );
  }
}

export default Calendar;
