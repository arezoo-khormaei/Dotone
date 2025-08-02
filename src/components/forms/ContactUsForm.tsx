import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

import Profile from "../../icons/Profile";
import Call from "../../icons/Call";
import Mail from "../../icons/Mail";
import Request from "../../icons/Request";
import Category from "../../icons/Category";

import { CustomSelect } from "../select/CustomSelect";

import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "../../api/contact";
import { useRef } from "react";
import { FocusableInput, FocusableTextarea } from "../inputs/FocusableInput";

const SITE_KEY = "your-site-key-from-google";

export default function ContactForm() {
  const { t } = useTranslation();

  const contactSchema = z.object({
    name: z.string().min(1, t("contact_us_form.required_field")),
    category: z.string().min(1, t("contact_us_form.required_field")),
    phone: z.string().min(1, t("contact_us_form.required_field")),
    email: z.string().email(t("contact_us_form.wrong_email")),
    request: z.string().min(1, t("contact_us_form.required_field")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const options = [
    { value: "category1", label: "موقعیت شغلی" },
    { value: "category2", label: "ایده و طرح" },
    { value: "category3", label: "انتقادات و پیشنهادات" },
  ];

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      reset();
      // setCaptchaValue(null);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 rounded-3xl xl:py-8 xl:px-9 md:p-5 p-4 space-y-6 w-full"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-light">
            {t("contact_us_form.name")}/{t("contact_us_form.company_name")}:
          </label>
          <div className="group flex items-center rounded-[10px] p-2 bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
            <Profile className="text-gray-400 group-focus-within:text-black transition-colors duration-300" />
            <div className="w-px h-3 mx-2 bg-gray-300 transition-colors duration-300 group-focus-within:bg-black" />
            <FocusableInput
              id="name"
              {...register("name")}
              placeholder={t("contact_us_form.name")}
              placeholderOnFocus="ا..."
              className="w-full outline-none text-sm font-extralight focus:placeholder-black placeholder:text-xs xl:placeholder:text-base"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm font-light">
            {t("contact_us_form.category")}:
          </label>
          <div className="group flex items-center rounded-[10px] bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
            <div ref={containerRef} className="flex items-center p-2 w-full">
              <Category className="text-gray-400 group-focus-within:text-black transition-colors duration-300" />
              <div className="w-px h-3 bg-gray-300 mx-2 transition-colors duration-300 group-focus-within:bg-black" />
              <Controller
                name="category"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    containerRef={containerRef}
                    value={field.value}
                    onChange={field.onChange}
                    options={options}
                    error={fieldState.error?.message}
                    placeholder={t("contact_us_form.choose_category")}
                  />
                )}
              />
            </div>
          </div>
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-light">
            {t("contact_us_form.phone_number")}:
          </label>
          <div className="group flex items-center rounded-[10px] p-2 bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
            <Call className="text-gray-400 group-focus-within:text-black transition-colors duration-300" />
            <div className="w-px h-3 mx-2 bg-gray-300 transition-colors duration-300 group-focus-within:bg-black" />
            <FocusableInput
              id="phone"
              {...register("phone")}
              placeholder={t("contact_us_form.phone_number")}
              className="w-full outline-none text-sm font-extralight focus:placeholder-black placeholder:text-xs xl:placeholder:text-base"
              placeholderOnFocus="ا..."
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-light">
            {t("contact_us_form.email")}:
          </label>
          <div className="group flex items-center rounded-[10px] p-2 bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
            <Mail className="text-gray-400 group-focus-within:text-black transition-colors duration-300" />
            <div className="w-px h-3 mx-2 bg-gray-300 transition-colors duration-300 group-focus-within:bg-black" />
            <FocusableInput
              id="email"
              type="email"
              {...register("email")}
              placeholder={t("contact_us_form.email")}
              className="w-full outline-none text-sm font-extralight focus:placeholder-black placeholder:text-xs xl:placeholder:text-base"
              placeholderOnFocus="ا..."
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Request */}
      <div className="mt-6 flex flex-col gap-1">
        <label htmlFor="request" className="text-sm font-light">
          {t("contact_us_form.request")}:
        </label>
        <div className="group flex items-start rounded-[10px] p-3 bg-white focus-within:border-black focus-within:ring-1 focus-within:ring-black transition">
          <Request className="text-gray-400 group-focus-within:text-black transition-colors duration-300" />
          <div className="w-px h-3 bg-gray-300 mx-2 transition-colors duration-300 group-focus-within:bg-black" />
          <FocusableTextarea
            id="request"
            {...register("request")}
            placeholder={t("contact_us_form.write_your_request")}
            className="resize-none h-32 w-full outline-none text-sm font-extralight focus:placeholder-black placeholder:text-xs xl:placeholder:text-base"
            placeholderOnFocus="ا..."
          />
        </div>
        {errors.request && (
          <p className="text-red-500 text-xs">{errors.request.message}</p>
        )}
      </div>

      {/* Captcha and Submit */}
      <div className="mt-6 flex md:flex-row flex-col items-center justify-between gap-5">
        <ReCAPTCHA
          sitekey={SITE_KEY}
          className="w-[50px] xl:scale-[0.9] scale-[0.7]"
          size="normal"
        />
        <input type="hidden" />
        <button
          type="submit"
          disabled={isPending}
          className="bg-black disabled:bg-gray-400 text-white text-sm font-extralight rounded-xl md:px-11 px-8 py-[10px]"
        >
          {isPending ? t("sending") : t("send")}
        </button>
      </div>
      <div className="w-full text-center">
        {isSuccess && (
          <p className="text-green-600 text-sm">
            {t("contact_us_form.success_message")}
          </p>
        )}
        {isError && (
          <p className="text-red-500 text-xs">
            {t("contact_us_form.error_message")}
          </p>
        )}
      </div>
    </form>
  );
}
