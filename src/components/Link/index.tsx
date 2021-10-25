import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  title: string;
  to: string;
};

export const Link: React.FC<Props> = (props) => (
  <div className="text-sm">
    <RouterLink to={props.to} className="font-medium text-indigo-600 hover:text-indigo-500">
      {props.title}
    </RouterLink>
  </div>
);
