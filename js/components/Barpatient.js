import React from "react"
import
{
  connect
}
from "react-redux"
import * as user from "./Function.js"
@connect((store) =>
{
  return {
    bar_change: store.bar_change
  };
})
export default class Barpatient extends React.Component
  {
    constructor(props)
    {
      super(props);
    }
    componentDidMount()
    {
      this._isMounted = true;
      window.onpopstate = () =>
      {
        if (this._isMounted)
        {

          // history.state.num ===   this.props.bar_change.page_num_patient
          // you can also compare with window.location.href
          //user.barChangeCheck(this.props.bar_change.array_patient[1], this.props.bar_change.array_patient, this.props.bar_change.next_patient)
          if (history.state.num == "1")
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            // 0
            //0,1   1
            //1,2   2
            //2,3   3
            //3,4   4
            //5     ...
            //4,6
            this.callButtonData(0, 1, "stop");
          }
          if (history.state.num == "2")
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            this.callButtonData(1, 2, "stop");
          }
          if (history.state.num == "3")
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);

            this.callButtonData(2, 3, "stop");

          }
          if (history.state.num == "4")
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            console.log("should have gone here")
            this.callButtonData(3, 4, "stop");

          }
          // The rest
          //------------------------------------------

          if (user.checkNumber(history.state.num, 5, 1300))
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            this.callButtonData(0, 1, "stop");
          }
          if (user.checkNumber(history.state.num, 6, 1300))
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            this.callButtonData(1, 2, "stop");
          }
          if (user.checkNumber(history.state.num, 7, 1300))
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            this.callButtonData(2, 3, "stop");
          }
          if (user.checkNumber(history.state.num, 8, 1300))
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            console.log("went here")
            this.callButtonData(3, 4, "stop");
          }
          if (user.checkNumber(history.state.num, 9, 1300))
          {
            console.log("THIS IS NEXT PATIENT VALUE: " + this.props.bar_change.next_patient);
            user.barChange(this.props.bar_change.array_patient[5], this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send", "stop")
          }

        }
      }
    }
    callButtonData(index_1, index_2, stop)
    {

      this.props.bar_change.next_patient === false ?
        user.barChange(this.props.bar_change.array_patient[index_1], this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send", stop) :
        user.barChange(this.props.bar_change.array_patient[index_2], this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send", stop)
    }
    render()
      {
        return ( <
            div className = "bar" >
            {
              this.props.bar_change.next_patient ? < p className = "bar_num move_first_num_bar"
              onClick = {
                () => user.barChange(1, this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send")
              } > 1 < /p>:""}
              {
                this.props.bar_change.next_patient ? < p className = "bar_num"
                onClick = {
                    () =>
                    {
                      // alert("0");
                      user.barChange(this.props.bar_change.array_patient[0], this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send")
                    }
                  } > ... < /p>:""}

                  <
                  p className = {
                    this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[0] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                      (this.props.bar_change.array_patient[1] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                  }
                onClick = {
                    () =>
                    {

                      //alert("0,1");
                      this.callButtonData(0, 1)
                      // window.history.pushState(
                      // {
                      //   num: this.props.bar_change.next_patient ? this.props.bar_change.array_patient[1] : this.props.bar_change.array_patient[0]
                      // }, null, '?num=' + this.props.bar_change.page_num_patient);
                    }
                  } >
                  {
                    this.props.bar_change.next_patient ? this.props.bar_change.array_patient[1] : this.props.bar_change.array_patient[0]
                  } < /p>

                  <
                  p className = {
                    this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[1] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                      (this.props.bar_change.array_patient[2] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                  }
                onClick = {
                    () =>
                    {

                      //alert("1,2");
                      this.callButtonData(1, 2);
                      // window.history.pushState(
                      // {
                      //   num: this.props.bar_change.next_patient ? this.props.bar_change.array_patient[2] : this.props.bar_change.array_patient[1]
                      // }, null, '?num=' + this.props.bar_change.page_num_patient);
                    }
                  } >
                  {
                    this.props.bar_change.next_patient ? this.props.bar_change.array_patient[2] : this.props.bar_change.array_patient[1]
                  } < /p>

                  <
                  p className = {
                    this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[2] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                      (this.props.bar_change.array_patient[3] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                  }
                onClick = {
                    () =>
                    {
                      //alert("2,3");
                      this.callButtonData(2, 3)
                      // window.history.pushState(
                      // {
                      //   num: this.props.bar_change.next_patient ? this.props.bar_change.array_patient[3] : this.props.bar_change.array_patient[2]
                      // }, null, '?num=' + this.props.bar_change.page_num_patient);
                    }
                  } >
                  {
                    this.props.bar_change.next_patient ? this.props.bar_change.array_patient[3] : this.props.bar_change.array_patient[2]
                  } < /p>

                  <
                  p className = {
                    this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[3] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                      (this.props.bar_change.array_patient[4] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                  }
                onClick = {
                  () =>
                  {
                    //alert("3,4");
                    this.callButtonData(3, 4)
                    // window.history.pushState(
                    // {
                    //   num: this.props.bar_change.next_patient ? this.props.bar_change.array_patient[4] : this.props.bar_change.array_patient[3]
                    // }, null, '?num=' + this.props.bar_change.page_num_patient);
                  }
                } >
                {
                  this.props.bar_change.next_patient ? this.props.bar_change.array_patient[4] : this.props.bar_change.array_patient[3]
                } < /p>

                {
                  this.props.bar_change.next_patient ?
                    <
                    p className = {
                      this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[4] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                        (this.props.bar_change.array_patient[5] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                    }
                  onClick = {
                      () =>
                      {
                        //alert("5");
                        user.barChange(this.props.bar_change.array_patient[5], this.props.bar_change.array_patient, this.props.bar_change.next_patient, "bar_change_patient", "patient_bar_send")
                        // window.history.pushState(
                        // {
                        //   num: this.props.bar_change.array_patient[5]
                        // }, null, '?num=' + this.props.bar_change.page_num_patient);
                      }
                    } >
                    {
                      this.props.bar_change.array_patient[5]
                    } < /p>:""}

                    <
                    p className = {
                      this.props.bar_change.next_patient === false ? (this.props.bar_change.array_patient[5] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num" :
                        (this.props.bar_change.array_patient[6] === this.props.bar_change.selected_patient) ? "selected_bar" : "bar_num"
                    }
                  onClick = {
                      () =>
                      {
                        //alert("4,6");
                        this.callButtonData(4, 6)
                        // window.history.pushState(
                        // {
                        //   num: "...."
                        // }, null, '?num=' + '...');
                      }
                    } > ...
                    <
                    /p> < /
                  div >
                )
              }
            }