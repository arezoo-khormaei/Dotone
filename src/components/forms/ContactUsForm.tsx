import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Profile from "../../icons/Profile";
import Call from "../../icons/Call";
import Mail from "../../icons/Mail";
import Request from "../../icons/Request";
import Category from "../../icons/Category";

import { CustomSelect } from "../select/CustomSelect";

import { useMutation } from "@tanstack/react-query";
import { submitContactForm } from "../../api/contact";

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
    { value: "category1", label: "دسته بندی 1" },
    { value: "category2", label: "دسته بندی 2" },
    { value: "category3", label: "دسته بندی 3" },
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 rounded-3xl py-8 px-9 space-y-6 w-full max-w-2xl"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-light">
            {t("contact_us_form.name")}/{t("contact_us_form.company_name")}:
          </label>
          <div className="flex items-center rounded-lg p-2 bg-white">
            <Profile />
            <div className="w-px h-3 bg-gray-300 mx-2" />
            <input
              id="name"
              type="text"
              placeholder={t("contact_us_form.name")}
              {...register("name")}
              className="w-full outline-none text-sm font-extralight"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-sm font-light">
            {t("contact_us_form.category")}:
          </label>
          <div className="flex items-center gap-2">
            <div className="flex items-center p-2 rounded-lg bg-white w-full">
              <Category />
              <div className="w-px h-3 bg-gray-300 mx-2" />
              <Controller
                name="category"
                control={control}
                render={({ field, fieldState }) => (
                  <CustomSelect
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
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-light">
            {t("contact_us_form.phone_number")}:
          </label>
          <div className="flex items-center rounded-lg p-2 bg-white">
            <Call />
            <div className="w-px h-3 bg-gray-300 mx-2" />
            <input
              id="phone"
              {...register("phone")}
              placeholder={t("contact_us_form.phone_number")}
              className="w-full outline-none text-sm font-extralight"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-light">
            {t("contact_us_form.email")}:
          </label>
          <div className="flex items-center rounded-lg p-2 bg-white">
            <Mail />
            <div className="w-px h-3 bg-gray-300 mx-2" />
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder={t("contact_us_form.email")}
              className="w-full outline-none text-sm font-extralight"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Request */}
      <div className="mt-6 flex flex-col gap-1">
        <label htmlFor="request" className="text-sm font-light">
          {t("contact_us_form.request")}:
        </label>
        <div className="flex items-start rounded-lg p-3 bg-white">
          <Request />
          <div className="w-px h-3 bg-gray-300 mx-2" />
          <textarea
            id="request"
            {...register("request")}
            placeholder={t("contact_us_form.write_your_request")}
            className="resize-none h-32 w-full outline-none text-sm font-extralight"
          />
        </div>
        {errors.request && (
          <p className="text-red-500 text-sm">{errors.request.message}</p>
        )}
      </div>

      {/* Captcha and Submit */}
      <div className="mt-6 flex md:flex-row flex-col items-center justify-between gap-5">
        <ReCAPTCHA
          sitekey={SITE_KEY}
          // onChange={(value) => {
          // setCaptchaValue(value);
          // }}
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
          <p className="text-red-500 text-sm">
            {t("contact_us_form.error_message")}
          </p>
        )}
      </div>
    </form>
  );
}
