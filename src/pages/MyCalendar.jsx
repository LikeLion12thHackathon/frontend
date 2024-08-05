import { Header } from '../components/Header';
import * as Styled from '../css/styled/calendar.styled';
import moment from "moment";
import { useState } from 'react';
import { QuestionLog } from '../components/MyCalendar/QuestionLog';

export const MyCalendar = () => {
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(new Date());
    const [attendDay] = useState(["2024-08-04", "2023-08-05"]); // 출석한 날짜 예시
    const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜 상태

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    
    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };

    const handleTileClick = (date) => {
        setSelectedDate(date); // 여기서 selectedDate에 날짜를 할당
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
                    activeStartDate={activeStartDate === null ? undefined : activeStartDate}
                    onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate)}
                    tileContent={({ date, view }) => {
                        let html = [];
                        const formattedDate = moment(date).format("YYYY-MM-DD"); // 날짜 형식

                        if (view === "month" && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()) {
                            html.push(<Styled.StyledToday key="today">오늘</Styled.StyledToday>);
                        }
                        if (attendDay.find((x) => x === formattedDate)) {
                            html.push(<Styled.StyledDot key={formattedDate} />);
                        }
                        return (
                            <div onClick={() => handleTileClick(formattedDate)}>
                                {html}
                            </div>
                        );
                    }}
                />
                {/* 오늘 버튼 추가 */}
                <Styled.StyledDate onClick={handleTodayClick}>오늘</Styled.StyledDate>
            </Styled.CalendarContainer>

            {/* 날짜 내용 보여주는 컴포넌트 */}
            {selectedDate && (
                <QuestionLog date={selectedDate} />
            )}
        </Styled.Container>
    );
};
