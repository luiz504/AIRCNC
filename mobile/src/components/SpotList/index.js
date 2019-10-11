import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';

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

function SpotList({ tech, navigation }) {
  // console.tron.log(navigation, tech);
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

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

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
            <ListItemImage
              source={{ uri: item.thumbnail_url }}
              resizeMode="center"
            />
            <ListItemCompany>{item.company}</ListItemCompany>
            <ListitemPrice>
              {item.price ? `R$${item.price}/day` : 'Free'}
            </ListitemPrice>
            <ListItemButton onPress={() => handleNavigate(item.id)}>
              <ListItemButtonText>Request Reservation</ListItemButtonText>
            </ListItemButton>
          </ListItem>
        )}
      />
    </SpotContainer>
  );
}

export default withNavigation(SpotList);

SpotList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  tech: PropTypes.string.isRequired,
};
