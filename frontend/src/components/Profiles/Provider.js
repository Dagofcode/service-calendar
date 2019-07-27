import React from "react";
import { Calendar } from "antd";
import dateFn from "date-fns";
import axios from "axios";
import useForm from "../../hooks/useForm";

const Provider = () => {
  const [form, handleInput, setForm] = useForm();

  const onSelect = value => {
    const currentMonth = dateFn.getMonth(value._d);
    const currentYear = dateFn.getYear(value._d);
    const currentDay = dateFn.getDate(value._d);

    const date = `${currentMonth} ${currentDay} ${currentYear}`;

    setForm(prevState => ({
      ...prevState,
      date
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/posts", form)
      .then(post => {
        console.log(post, "created");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="calendar">
      <Calendar
        fullscreen={false}
        onPanelChange={Provider}
        onSelect={onSelect}
      />

      <form action="">
        <input type="text" name="title" onChange={handleInput} />
        <input type="text" name="description" onChange={handleInput} />

        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Provider;
