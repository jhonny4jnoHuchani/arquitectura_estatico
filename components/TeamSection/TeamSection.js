"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';
import Teams from '../../api/Teams'
import Image from 'next/image';

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://serviciopagina.upea.bo/api/AutoridadAll/21");
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchUsers();
      }, []);
    return (
      <section className="Arkitek-team-section-s2 section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SectionTitle subTitle={"ARQUITECTURA"} Title={"Autoridades"} />
            </div>
          </div>
          <div className="team-wrapar">
            <div className="row">
              {/* CÓDIGO DINÁMICO DESDE API - COMENTADO
              {users.map((user, index) => (
                <div className="col col-lg-4 col-md-6 col-12" key={index}>
                  <div className="team-item">
                    <div className="image">
                      <div className="shape-1"></div>
                      <Image
                        src={`https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/${user.foto_autoridad}`}
                        alt={`Foto de ${user.nombre_autoridad}`}
                        width={200}
                        height={200}
                        unoptimized
                      />
                      <ul className="icon">
                        <li>
                          <Link onClick={ClickHandler} href="#">
                            <i className="ti-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="#">
                            <i className="ti-twitter-alt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="#">
                            <i className="ti-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <h2>{user.cargo_autoridad}</h2>
                      <span>{user.nombre_autoridad}</span>
                    </div>
                  </div>
                </div>
              ))}*/}

              {/* CÓDIGO ESTÁTICO - ACTIVO */}
              <div className="col col-lg-4 col-md-6 col-12">
                <div className="team-item">
                  <div className="image">
                    <div className="shape-1"></div>
                    <Image
                      src="/images/autoridades/FREDDY -DIREC.png"
                      alt="Arq. Freddy Sejas - Director de Carrera"
                      width={200}
                      height={200}
                    />
                    <ul className="icon">
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h2>Director de Carrera</h2>
                    <span>Arq. Freddy Sejas</span>
                  </div>
                </div>
              </div>

              {/* Agrega más autoridades según las imágenes que tengas */}
              <div className="col col-lg-4 col-md-6 col-12">
                <div className="team-item">
                  <div className="image">
                    <div className="shape-1"></div>
                    <Image
                      src="/images/autoridades/coaquira- ASO.png"
                      alt="Ing. Hugo Coaquira_Ejecutivo Asociacion de Docentes"
                      width={200}
                      height={200}
                    />
                    <ul className="icon">
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h2>Ejecutivo Asociación de Docentes</h2>
                    <span>Ing. Hugo Coaquira H.</span>
                  </div>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-12">
                <div className="team-item">
                  <div className="image">
                    <div className="shape-1"></div>
                    <Image
                      src="/images/autoridades/oscar- CENTRO DE ESTUDIANTES.png"
                      alt="Univ. Oscar Mamani - Presidente Centro de Estudiantes"
                      width={200}
                      height={200}
                    />
                    <ul className="icon">
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="#">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h2>Ejecutivo Centro de Estudiantes</h2>
                    <span>Univ Oscar Hilari L.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default TeamSection;