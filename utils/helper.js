import * as Yup from "yup";

export const formValidationSchema = Yup.object({
    name: Yup.string().max(30, "بیشتر از 30 کاراکتر وارد نکنید")
        .matches(/^[^\d]*$/, "نام نمی‌تواند شامل عدد باشد").required("وارد کردن نام اجباری است"),
    family: Yup.string().max(30, "بیشتر از 30 کاراکتر وارد نکنید")
        .matches(/^[^\d]*$/, "نام خانوادگی نمی‌تواند شامل عدد باشد").required("وارد کردن نام خانوادگی اجباری است"),
    age: Yup.number().min(1, "سن وارد شده اشتباه است").max(200, "سن وارد شده اشتباه است").required("وارد کردن سن اجباری است"),
    nationalCode: Yup.number().transform((value, originalValue) => {
        return originalValue === '' ? undefined : Number(originalValue);
    })
        .typeError("لطفاً یک کدملی معتبر وارد کنید")
        .min(1000000000, "تعداد ارقام کدملی صحیح نمی باشد")
        .max(9999999999, "تعداد ارقام کدملی صحیح نمی باشد")
        .required("وارد کردن کدملی اجباری است"),
    fatherName: Yup.string().max(30, "بیشتر از 30 کاراکتر وارد نکنید")
        .matches(/^[^\d]*$/, "نام پدر نمی‌تواند شامل عدد باشد").required("وارد کردن نام پدر اجباری است"),
    phoneNumber: Yup.number().transform((value, originalValue) => {
        return originalValue === '' ? undefined : Number(originalValue);
    })
        .typeError("لطفاً یک شماره تلفن معتبر وارد کنید")
        .min(1000000000, "تعداد ارقام شماره تلفن صحیح نمی باشد")
        .max(99999999999, "تعداد ارقام شماره تلفن صحیح نمی باشد")
        .required("وارد کردن شماره تلفن اجباری است"),
    email: Yup.string().email("ایمیل وارد شده صحیح نمی باشد"),
    city: Yup.string().max(30, "بیشتر از 30 کاراکتر وارد نکنید")
        .matches(/^[^\d]*$/, "نام شهر نمی‌تواند شامل عدد باشد").required("وارد کردن شهر اجباری است"),
    address: Yup.string().min(5, "حداقل 5 کاراکتر وارد نمایید").required("وارد کردن آدرس اجباری است")
})