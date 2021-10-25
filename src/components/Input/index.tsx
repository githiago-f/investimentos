import React, { InputHTMLAttributes } from 'react';
import './styles.css';

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
      className="btn"
      placeholder={props.title}
    />
  </div>
);
