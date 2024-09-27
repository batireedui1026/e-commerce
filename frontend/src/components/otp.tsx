const Otp = () => {
  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      <EmailIcon />
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
          onClick={handleResendOtp}
          variant="link"
        >
          Дахин илгээх ({countDown})
        </Button>
      </div>
    </div>
  );
};
export default Otp;
