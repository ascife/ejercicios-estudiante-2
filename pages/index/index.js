import React from 'react';
import Map from '../../helpers/map';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import Block from '../../components/Block';
import Button from '../../components/Button';
import Container from '../../components/Container';

//redux
import { connect } from 'react-redux';
import { persist } from '../../store/reducers/persist';

function Index(props) {
  const [state, setState] = React.useState({
    notification: null,
    addParticipant: false,
    selectCategory: false,
    selectedCategory: null,
    removeParticipant: false,
    selectedParticipant: null,
    participants: props.persisted.participants || [],
    report: {},
  })

  function updateState(nstate) {
    setState({
      ...state,
      ...nstate,
    })
  }

  let report = {
    categoryMountain: {
      label: 'Bicicleta de montaña',
      value: 0,
    },

    categoryRoute: {
      label: 'Bicicleta de ruta',
      value: 0,
    },

    totalParticipants: {
      label: 'total participantes',
      value: 0
    },

    totalWomans: {
      label: 'Mujeres',
      value: 0
    },

    totalMens: {
      label: 'Hombres',
      value: 0
    },

    performanceHigh: {
      label: 'Rendimiento alto',
      value: 0
    },

    performanceMedium: {
      label: 'Rendimiento medio',
      value: 0
    },

    totalAges: {
      label: 'Total edades',
      value: 0
    },

    averageAges: {
      label: 'Promedio edades',
      value: 0
    },      
  }

  state.participants.forEach((participant)=> {

    let {
      performance,
      category,
      gender,
      age,
    } = participant;

    performance = performance.toLowerCase();
    category = category.toLowerCase();
    gender = gender.toLowerCase();

    let {
      totalParticipants,
      averageAges,
      totalAges,
      totalMens,
      totalWomans,
      performanceHigh,
      categoryRoute,
      categoryMountain,
      performanceMedium,
    } = report;

    totalParticipants.value += 1;
    totalAges.value += age;
    averageAges.value = Math.round(totalAges.value / totalParticipants.value);

    if(category === 'mountain')
      categoryMountain.value += 1;

    if(category === 'route')
      categoryRoute.value += 1;
    
    if(gender === 'men')
      totalMens.value += 1;

    if(gender === 'woman')
      totalWomans.value += 1;

    if(performance === 'high')
      performanceHigh.value += 1;

    if(performance === 'medium')
      performanceMedium.value += 1;

  })

  state.report = report;

  function addParticipant(participant) {
    let continuer = true;

    let field = {
      'name': 'nombre',
      'age': 'edad',
    }

    Object.keys(participant).forEach((key)=> {
      let value = participant[key];
  
      if(value.toString().length > 0) 
        return;

      if(continuer)
        updateState({
          notification: {
            label: `Verifica los campos`,
            message: `El campo ${field[key]} esta vacio`
          }
        })

      continuer = false;
    })

    if(!continuer)
      return;

    participant.id = Math.round(Math.random() * 100000);
    participant.category = state.selectedCategory;
    state.participants.push(participant);  
    
    props.persist('participants', state.participants);

    updateState({
      addParticipant: false,
    })
  }

  function removeParticipant(participant) {
    state.participants = state.participants.filter(p => {
      if(participant.id !== p.id)
        return 1;  
    })

    props.persist('participants', state.participants);

    updateState({
      selectedParticipant: null,
    })
  }

  function selectParticipant(participant) {
    updateState({
      selectedParticipant: participant,
    })
  }

  return (
    <>
      <Modal showIf={state.selectCategory}>
        <Form.Center>
          <Form>
            <Form.Header
              label='Selecciona una categoria'
              onClose={ev => updateState({selectCategory: false})}
            />
            <Form.Body>
              <Block.Category
                category='route'
                onClick={ev => updateState({
                  selectCategory: false,
                  addParticipant: true,
                  selectedCategory: 'route',
                })}
              />
              <Block.Category
                category='mountain'
                onClick={ev => updateState({
                  selectCategory: false,
                  addParticipant: true,
                  selectedCategory: 'mountain',
                })}
              />
            </Form.Body>
            <Form.Footer>
              {/* nothing */}
            </Form.Footer>
          </Form>
        </Form.Center>
      </Modal> 

      <Modal showIf={state.addParticipant}>
        <Form.Center>
          <Form onSubmit={addParticipant}>
            <Form.Header
              label='Agregar participante'
              onClose={ev => updateState({
                addParticipant: false,
              })}
            />
            <Form.Body>
              <Form.Label>Nombre</Form.Label>
              <Form.Field
                name='name'
                verifier='Name'
              />
              <Form.Label>Edad</Form.Label>
              <Form.Field 
                name='age'
                verifier='Age'
              />
              <Form.Label>Genero</Form.Label>
              <Form.CheckBoxes name='gender'>
                <Form.CheckBox>Men</Form.CheckBox>
                <Form.CheckBox>Woman</Form.CheckBox>
              </Form.CheckBoxes>

              <Form.Label>Rendimiento</Form.Label>
              <Form.CheckBoxes name='performance'>
                <Form.CheckBox>High</Form.CheckBox>
                <Form.CheckBox>Medium</Form.CheckBox>
              </Form.CheckBoxes>
            </Form.Body>
            <Form.Footer>
              <Button.Fill color='#551144'>
                Agregar
              </Button.Fill>
            </Form.Footer>
          </Form>
        </Form.Center>
      </Modal>

      <Modal showIf={state.selectedParticipant}>
        <Form.Center>
          <Form onSubmit={removeParticipant}>
            <Form.Header
              label='Participante'
              onClose={ev => updateState({
                selectedParticipant: null,
              })}
            />
            <Form.Body>
              <Form.Variable
                name='id'
                value={state.selectedParticipant?.id}
              />
              <Form.Label>Nombre</Form.Label>
              <Form.FieldDisabled
                name='name'
                value={state.selectedParticipant?.name}
              />
              <Form.Label>Edad</Form.Label>
              <Form.FieldDisabled 
                name='age'
                value={state.selectedParticipant?.age}
              />
              <Form.Label>Genero</Form.Label>
              <Form.FieldDisabled
                name='gender'
                value={state.selectedParticipant?.gender}
              />
              <Form.Label>Rendimiento</Form.Label>
              <Form.FieldDisabled 
                name='performance'
                value={state.selectedParticipant?.performance}
              />
            </Form.Body>
            <Form.Footer>
              <Button.Fill color='#ff0000'>
                Eliminar
              </Button.Fill>
            </Form.Footer>
          </Form>
        </Form.Center>
      </Modal>

      <Modal showIf={state.notification}>
        <Form.Center>
          <Form onSubmit={ev => updateState({notification: null})}>
            <Form.Header 
              label={state.notification?.label}
              onClose={ev => updateState({
                notification: null
              })}
            />
            <Form.Body>
              <Form.Label>
                {state.notification?.message}
              </Form.Label>
            </Form.Body>
            <Form.Footer>
              <Button.Fill color='#999999'>
                ok
              </Button.Fill>
            </Form.Footer>
          </Form>
        </Form.Center>
      </Modal>
      
      <Container my={40}>
        <Container.Row>
          <Button.Icon
            icon='add'
            label='Agregar participante'
            onClick={ev => updateState({
              selectCategory: true,
            })}
          />
          {/* <Button.Icon
            icon='search'
            label='Buscar participante'
            onClick={searchParticipant}
          /> */}
        </Container.Row>
      </Container>

      <Container>
        <Container.TitleBold>
          Participantes inscritos
        </Container.TitleBold>
        <Container.Wrap>
          <Map data={state.participants}>
            <Block.Participant
              name
              category
              onClick={ev => selectParticipant(ev.map.data)}
            />
          </Map>
        </Container.Wrap>
      </Container>

      <Container>
        <Container.TitleBold>
          Reporte de participantes
        </Container.TitleBold>
        <Container.Wrap>
          <Map data={state.report}>
            <Block.Report 
              label="Total Participantes"
              value="200"
            />
          </Map>
        </Container.Wrap>
      </Container>
    </>
  )
}


const mapStateToProps = function(store) {
  return {
    persisted: store.persistReducer
  }
}

const mapActionsToProps = function(dispath) {
  return {
    persist: (key, value)=> dispath(persist(key, value)) 
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Index);