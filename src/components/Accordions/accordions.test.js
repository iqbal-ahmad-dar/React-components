import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordions from '../Accordions';

const accordionData = [
  {
    title: 'Healthy Eating',
    subtitle: 'Tips for a balanced diet',
    content:
      'Healthy eating means consuming a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy. These nutrients include protein, carbohydrates, fat, water, vitamins, and minerals.',
  },
  {
    title: 'Exercise Benefits',
    subtitle: 'Why staying active is important',
    content:
      'Regular physical activity can improve muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.',
  },
  {
    title: 'Mental Health',
    subtitle: 'Caring for your mental well-being',
    content:
      'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.',
  },
  {
    title: 'Sleep Hygiene',
    subtitle: 'Tips for better sleep',
    content:
      'Good sleep hygiene includes setting a consistent sleep schedule, creating a restful environment, and avoiding screens before bedtime. Getting enough quality sleep is essential for maintaining physical health, emotional well-being, and cognitive functioning.',
  },
];

describe('Accordions component', () => {
  test('renders correctly', () => {
    render(<Accordions accordions={accordionData} />);
    accordionData.forEach((accordion) => {
      expect(screen.getByText(accordion.title)).toBeInTheDocument();
      if (accordion.subtitle) {
        expect(screen.getByText(accordion.subtitle)).toBeInTheDocument();
      }
    });
  });
});
