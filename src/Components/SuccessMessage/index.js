const SuccessMessage = ({ count }) => {
  return (
    <div className="alert alert-success" role="alert">
      <p>
        Success! You have submitted {count} pending referrals. You will be
        notified once they've been approved
      </p>
    </div>
  );
};

export default SuccessMessage;
