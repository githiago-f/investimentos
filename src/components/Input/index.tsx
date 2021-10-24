import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<{
  title: string;
}>;

export const Input: React.FC<Props> = (props) => (
  <div>
    <label htmlFor={props.id} className="sr-only">
      {props.title}
    </label>
    <input
      {...props}
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={props.title}
    />
  </div>
)