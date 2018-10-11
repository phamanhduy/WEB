import React from 'react';

const ButtonLogin = ({ isFetching }) => (
  <div>
    {
      isFetching ?
        <button disabled={true} type="button" className="col-md-12 btn btn-default px-lg-3">
          Đang đăng nhập &nbsp;
          <i className='fa fa-circle-o-notch fa-spin'/>
        </button>
        :
        <button type="submit" className="col-md-12 btn btn-primary px-lg-3">
          Đăng nhập
        </button>
    }
  </div>
);
export default ButtonLogin;
