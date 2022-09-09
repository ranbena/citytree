import styled from 'styled-components';
import Hero from 'src/components/Hero';
import { Title } from 'src/components/Box';
import { breakpoints } from 'src/utils';

export const InfoCenterHero = styled(Hero)`
  min-height: 650px !important;

  .inner-links {
    display: none;
    font-size: 20px;
    margin-top: 20px;
  }

  .infoCenterContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50px;
    bottom: 100px;
    left: 0;
    right: 0;

    .floatBox {
      position: absolute;
      width: 150px;
      padding: 10px 25px !important;
      border-radius: 40px !important;
    }

    .clickable {
      cursor: pointer;
      transition: background-color 100ms linear;

      &:hover {
        background-color: #c9ddc9e6;
      }

      &:hover ${Title} {
        text-decoration: underline;
      }
    }

    .float-box-link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .center {
      position: static;
      width: 270px;
      padding: 25px !important;
      border-radius: 70px !important;
    }

    .topRight {
      top: 25px;
      right: 260px;
    }

    .right {
      top: 230px;
      right: 220px;
    }

    .bottomRight {
      top: 390px;
      right: 330px;
    }

    .bottom {
      bottom: -80px;
      left: 380px;
    }

    .left {
      top: 220px;
      left: 200px;
    }

    .topLeft {
      top: 0px;
      left: 250px;
      width: 170px;
    }

    @media ${breakpoints.xl} {
      .topRight {
        right: 180px;
      }

      .right {
        right: 140px;
      }

      .bottomRight {
        right: 250px;
      }

      .bottom {
        left: 300px;
      }

      .left {
        left: 120px;
      }

      .topLeft {
        left: 170px;
      }
    }

    @media ${breakpoints.lg} {
      .topRight {
        right: 80px;
      }

      .right {
        right: 40px;
      }

      .bottomRight {
        right: 150px;
      }

      .bottom {
        left: 200px;
      }

      .left {
        left: 20px;
      }

      .topLeft {
        left: 70px;
      }
    }
  }

  @media ${breakpoints.md} {
    min-height: 0 !important;

    .infoCenterContainer {
      position: relative;
      top: 0;
      left: 0;

      .center {
        width: 100% !important;
        padding: 15px !important;
        border-radius: 20px !important;
        position: static;
      }

      .floatBox:not(.center) {
        display: none;
      }

      .inner-links {
        display: block;
      }
    }
  }
`;
