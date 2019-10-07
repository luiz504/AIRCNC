import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  SpotContainer,
  SpotTitle,
  Bold,
  SpotsList,
  ListItem,
  ListItemImage,
  ListItemCompany,
  ListitemPrice,
  ListItemButton,
  ListItemButtonText,
} from './styles';

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState();

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });

      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <SpotContainer>
      <SpotTitle>
        Companies that work with <Bold>{tech}</Bold>
      </SpotTitle>
      <SpotsList
        data={spots}
        keyExtractor={spot => spot.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <ListItemImage source={logo} resizeMode="center" />
            <ListItemCompany>{item.company}</ListItemCompany>
            <ListitemPrice>
              {item.price ? `R$${item.price}/day` : 'Free'}
            </ListitemPrice>
            <ListItemButton onPress={() => {}}>
              <ListItemButtonText>Request Reservation</ListItemButtonText>
            </ListItemButton>
          </ListItem>
        )}
      />
    </SpotContainer>
  );
}
