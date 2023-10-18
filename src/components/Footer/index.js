import React from 'react';
import "./style.css";

const Footer = () => {
    return (
        <>
          <footer id="footer">
              <div className="container">
                  <div className="footer">
                     <div className="movies">
                         <h1>Movies KG</h1>
                         <button>Выпустит сообщество</button>
                     </div>
                      <div className="div2">
                          <h1>ГЛАВНОЕ</h1>
                          <h1>О TMDB</h1>
                          <h3>Связаться с нами</h3>
                          <h3>Форумы поддержки</h3>
                          <h3>API</h3>
                          <h3>Статус системы</h3>

                      </div>
                      <div className="div2">
                          <h1>УЧАСТВУЙТЕ</h1>
                          <h3>Библия редакторов</h3>
                          <h3>Добавить новый фильм</h3>
                          <h3>Добавить новый фильм</h3>

                      </div>
                      <div className="div2">
                          <h1>СООБЩЕСТВО</h1>
                          <h3> Руководства</h3>
                          <h3>Обсуждения</h3>
                          <h3> Доска почёта</h3>
                          <h3> Twitter</h3>





                      </div>
                      <div className="div2">
                          <h1>О ПРАВЕ</h1>
                          <h3>  Условия использования</h3>
                          <h3>  API Правила использования</h3>
                          <h3>Политика конфиденциальности</h3>
                          <h3>  Жалоба правообладателя</h3>






                      </div>

                  </div>
              </div>




          </footer>

        </>
    );
};

export default Footer;