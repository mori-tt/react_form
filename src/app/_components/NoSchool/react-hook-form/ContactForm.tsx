'use client'
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm = () => {
    const methods = useForm<FormData>();
    const { register, handleSubmit, formState: { errors } } = methods;

    const onSubmit = (data: FormData) => {
        console.log('送信データ:', data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">名前</label>
                    <input
                        id="name"
                        {...register('name', { required: '名前を入力してください' })}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'メールアドレスを入力してください' })}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'メッセージを入力してください' })}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        送信
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

export default ContactForm;
