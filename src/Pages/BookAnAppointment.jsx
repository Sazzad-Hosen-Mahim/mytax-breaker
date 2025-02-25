import AppointmentForm from "../components/BookAppointment/AppointmentForm";
import BookAppointMentHeader from "../components/BookAppointment/BookAppointMentHeader";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";

const BookAnAppointment = () => {
  return (
    <div>
      <BookAppointMentHeader />
      <CommonWrapper>
        <div className="2xl:h-[1300px]">
          <AppointmentForm />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default BookAnAppointment;
