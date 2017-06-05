export const styleNames = ['style0', 'style1', 'style2', 'style3'];

export function getImage(name) {
  switch(name) {
  case 'style0':
    return require('../../../assets/thumbnails/style0.jpg');
  case 'style1':
    return require('../../../assets/thumbnails/style1.jpg');
  case 'style2':
    return require('../../../assets/thumbnails/style2.jpg');
  case 'style3':
    return require('../../../assets/thumbnails/style3.jpg');
  }
}