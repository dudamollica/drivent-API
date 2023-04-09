import { ApplicationError } from '@/protocols';

export function noContentError(): ApplicationError {
  return {
    name: 'NoContentError',
    message: 'No result for this search!',
  };
}
