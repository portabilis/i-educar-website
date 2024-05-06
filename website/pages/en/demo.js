/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const DocsBlock = require(process.cwd()+ '/core/DocsBlock.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const BlockHeader = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    className={props.class}
    >
    <GridBlock className={props.classNameGrid} align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
    className={props.className}>
    <DocsBlock className={props.classNameGrid} align="left" contents={props.children} layout={props.layout} />
    <span className='docsText'>
      <p>Veja algo que precisa ser corrigido? Propor uma mudança na <a href="https://github.com/portabilis/i-educar/issues" >fonte</a></p>
      <p>Precisa de uma versão diferente dos documentos?<a> Veja as versões disponíveis.</a></p>
    </span>
  </Container>
);








class Docs extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="demo container docsContainerHeader paddingBottom paddingTop">
          <div className="wrapper">
            <div>
              <div className="blockElement docsGridHeader twoByGridBlock">
                <div className="blockContent">
                  <h2>
                    <div><span><p>Demonstração</p></span></div>
                  </h2>
                  <div><span><p>Explore o ambiente de demonstração e experimente as funcionalidades dos softwares i-Educar e i-Diário.</p></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo container docsContainer paddingBottom paddingTop">
          <div className="wrapper">
            <div className="gridBlock">
              <div className="blockElement docsGrid fourByGridBlock imageAlignTop">
                <div className="docsGridTitle">
                  <div>
                    <h2 className="i-educar">i-Educar</h2>
                  </div>
                </div>
                <div className="blockContent">
                  <p>
                    Um software livre que facilita a gestão das unidades escolares de ensino, assim como da própria Secretaria de Educação por meio dos dados, transparência e tecnologia, garantindo a eficiência dos processos.
                  </p>
                  <p>
                    <strong>Login de acesso</strong>
                    <br/>
                    Matrícula: comunidade
                    <br/>
                    Senha: Comunidade@1
                  </p>
                  <div className="demo-link">
                    <a href="https://comunidade.ieducar.com.br" target="_blank">Acessar</a>
                  </div>
                </div>
              </div>
              <div className="blockElement docsGrid fourByGridBlock imageAlignTop">
                <div className="docsGridTitle">
                  <div>
                    <h2 className="i-diario">i-Diário</h2>
                  </div>
                </div>
                <div className="blockContent">
                  <p>
                    Facilita a gestão das salas de aulas para os professores e coordenadores pedagógicos, acompanhando o registro escolar dos alunos, das frequências e avaliações de forma interligada com o i-Educar.
                  </p>
                  <p>
                    <strong>Login de acesso</strong>
                    <br/>
                    Usuário: comunidade
                    <br/>
                    Senha: Comunidade@1
                  </p>
                  <div className="demo-link">
                    <a href="https://idiario.ieducar.com.br" target="_blank">Acessar</a>
                  </div>
                </div>
              </div>
            </div>
            <span className="docsText"><p>Veja algo que precisa ser corrigido? Propor uma mudança na <a
              href="https://github.com/portabilis/i-educar/issues">fonte</a></p><p>Precisa de uma versão diferente dos documentos?<a> Veja as versões disponíveis.</a></p></span>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Docs;
