import { Component } from "react";
import { SectionTitle } from './SectionTitle/SectionTitle';

export const App = () => {

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
        }}
      >
        <SectionTitle />
      </div>
    );
};
