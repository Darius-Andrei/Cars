import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization:
         'Client-ID 9ac7OZ6TXpk7j6aXwUQQ8iVTBOXeXI7tPKBj01xCvsQ'
  }
});