export class Machinery {

  public isModelEnabled: boolean;
  public model: number;
  public latitude: number;
  public longitude: number;
  public isNewEnabled: boolean;
  public isNew: boolean;
  public isStateEnabled: boolean;
  public state: boolean;
  public isRepairableEnabled: boolean;
  public repairable: boolean;
  public isDocumentationEnabled: boolean;
  public documentation: number;
  public piece1: number;
  public piece2: number;
  public piece3: number;
  public piece4: number;
  public originalData: Object;

  constructor(data?: any) {
    this.isModelEnabled = false;
    this.isNewEnabled = false;
    this.isStateEnabled = false;
    this.isRepairableEnabled = false;
    this.isDocumentationEnabled = false;

    if (data instanceof Object) {
      this.model = parseInt(data.Modelo_Maquina);
      this.latitude = parseFloat(data.Latitud.replace(',', '.'));
      this.longitude = parseFloat(data.Longitud.replace(',', '.'));
      this.isNew = data.Maquina_Nueva === "1" ? true : false;
      this.state = data.Maquina_Estado === "1" ? true : false;
      this.repairable = data.Maquina_Reparar === "1" ? true : false;
      this.documentation = parseInt(data.Maquina_Documentacion);
      this.piece1 = parseInt(data.Pieza_1)
      this.piece2 = parseInt(data.Pieza_2)
      this.piece3 = parseInt(data.Pieza_3)
      this.piece4 = parseInt(data.Pieza_4)
      this.originalData = data;
    }
  }

  public toArray() {
    return [
      { key: 'Modelo de maquinaria', value: this.model },
      { key: 'Latitud', value: this.latitude },
      { key: 'Longitud', value: this.longitude },
      { key: 'Nueva?', value: this.isNew ? 'Si' : 'No' },
      { key: 'En buen estado?', value: this.state ? 'Si' : 'No' },
      { key: 'Necesita repararse?', value: this.repairable ? 'Si' : 'No' },
      { key: 'Tipo de documentación', value: this.documentation },
    ];
  }
}
