import React, {useState} from 'react'
import { DatePicker, TimePicker, Button} from 'antd';
import moment from 'moment';
import 'moment/locale/vi';

const TestDate = () => {
    const { RangePicker } = DatePicker;
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const [time, setTime] = useState([]);


    const disabledDate = (current) => {
        if (!dates) {
        return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return !!tooEarly || !!tooLate;
    };
    const onOpenChange = (open) => {
        if (open) {
        setDates([null, null]);
        } else {
        setDates(null);
        }
    };
    const handleOnChangeDate = (val) => {
        setValue(val);
        // value.map(date => console.log(date.$d));
    }
    const handleOnChangeTime = (time, timeString) => {
        // console.log('[time]:', time);
        console.log('[timeString]:', timeString);
        console.log('[time]:', time);
        setTime(timeString);
    };
    const handleSubmitTime = () => {
       
        console.log('submit success', {
            date: value,
            time: time
        })
    }
  return (
    <div>
        <TimePicker.RangePicker onChange={handleOnChangeTime} />
        <br />
        <RangePicker
            value={dates || value}
            disabledDate={disabledDate}
            onCalendarChange={(val) => setDates(val)}
            onChange={handleOnChangeDate}
            onOpenChange={onOpenChange}
        />
       
        <div style={{background:'gray'}}>
       
           
            <span>Ngày bắt đầu : {time && time[0] +':'} {value ? moment(value[0].$d).format(`dddd, Do MMMM YYYY`) : 'chưa có ngày'}</span>
             <br />
             <span>Ngày kết thúc : {time && time[1] +':' } {value ? moment(value[1].$d).format(`dddd, Do MMMM YYYY`) : 'chưa có ngày'}</span>
        </div>
        <Button onClick={handleSubmitTime} type='primary'>Ok</Button>
    </div>
   
  )
}

export default TestDate