import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #007AFF;
  text-align: center;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007AFF;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin: 8px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const DeleteButton = styled(Button)`
  background-color: #FF3B30;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

export const ListContainer = styled.View`
  padding: 8px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`; 