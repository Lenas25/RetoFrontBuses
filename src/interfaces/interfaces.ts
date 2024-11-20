export interface TableProps {
  headers: string[];
  baseUrl: string; 
}

export interface Data{
  id : number;
  caracteristicas : string;
  is_active : boolean;
  created_at : string;
  numeroBus : number;
  placa : string;
  marcaData: {
    id : number;
    nombre : string;
  }
}