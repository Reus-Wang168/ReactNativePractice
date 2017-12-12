/**
 * Created by Rookie on 2017/12/5.
 */


import styled from 'styled-components/native';
import Screen from './common/Screen';

export const StyledTextInput = styled.TextInput`
    height: 40px;
    width: ${Screen.width - 100};
    margin-top: 20px;
    border: 1px gray;
`;

export const BeautyTextInput = StyledTextInput.extend`
  border: 0;
  font-size: 25px;
  color:${props => props.theme.primaryColor}
`;

export const StyledScrollView = styled.ScrollView`background: white;padding-bottom: 20px`;