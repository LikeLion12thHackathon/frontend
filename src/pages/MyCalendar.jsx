import { Header } from '../components/Header';
import * as Styled from '../css/styled/calendar.styled';
import moment from "moment";
import { useState } from 'react';

export const MyCalendar = () => {
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(new Date());
    const [attendDay] = useState(["2024-08-04", "2023-08-05"]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleTileClick = (date) => {
        setSelectedDate(date);
        console.log('Selected Date:', date); // 확인용 로그
    };

    return (
        <Styled.Container>
            <Header text="질문 기록" />
            <Styled.CalendarContainer>
                <Styled.StyledCalendar
                    value={date}
                    onChange={handleDateChange}
                    formatDay={(locale, date) => moment(date).format("D")}
                    formatYear={(locale, date) => moment(date).format("YYYY")}
                    formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
                    calendarType="gregory"
                    showNeighboringMonth={false}
                    next2Label={null}
                    prev2Label={null}
                    minDetail="year"
                    activeStartDate={activeStartDate}
                    onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
                    tileContent={({ date, view }) => {
                        let html = [];
                        const formattedDate = moment(date).format("YYYY-MM-DD");

                        if (view === "month" && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                            html.push(<Styled.StyledToday key="today">오늘</Styled.StyledToday>);
                            console.log("확인용1");
                        }
                        if (attendDay.find((x) => x === formattedDate)) {
                            html.push(<Styled.StyledDot key={formattedDate} />);
                            console.log("확인용2");
                        }
                        return (
                            <div onClick={() => handleTileClick(formattedDate)}>
                                {html}
                            </div>
                        );
                    }}
                />
            </Styled.CalendarContainer>

            {/* {selectedDate && (
                <QuestionDetail date={selectedDate} />
            )} */}
        </Styled.Container>
    );
};
